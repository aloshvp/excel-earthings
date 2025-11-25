'use server';
import { EncryptJWT,jwtDecrypt } from 'jose';
import { cookies } from 'next/headers';
import {  unstable_rethrow } from 'next/navigation'

const secretKey = Buffer.alloc(32, process.env.SECRET_KEY);
const key = new TextEncoder().encode(secretKey);


export async function encrypt(payload) {
  try{
    return await new EncryptJWT(payload)
      .setProtectedHeader({ alg: "dir", enc: "A256GCM" }) // Direct encryption (AES-GCM)
      .setIssuedAt()
      .setExpirationTime("30m") // Expire in 30 minutes
      .encrypt(key);
  }catch(er){

  }
}

export async function decrypt(input) {
  try {
    const { payload } = await jwtDecrypt(input, key);
    return payload;
  } catch (error) {
    return null; 
  }
}


export async function Adminlogin(formData) {

    try{
        if (!formData.UserName||!formData.Srno) {
            throw new Error('values required');
        }

        const user = { Username: formData.UserName ,srno:formData.Srno };
        const expires = new Date(Date.now() + 1800 * 1000);
        const session = await encrypt({ user, expires });

        if (!session) {
            throw new Error('Failed to create session');
        }

        await (await cookies()).set('session', session, {
            expires,
            path: '/',
            //httpOnly: true,
            //secure: process.env.NODE_ENV === 'production',
            //sameSite: 'strict',
        });
    }catch(ex){

    }

}

export async function logout() {
  try{
    await (await cookies()).set('session', '', {
        expires: new Date(0), // Expires immediately
        path: '/',
        //httpOnly: true,
        //secure: process.env.NODE_ENV === 'production',
        //sameSite: 'strict',
    });
  }catch(ex){

  }
}

export async function getSession() {
    try {
        const cookiesObj = await cookies();
        
        const session = cookiesObj.get('session')?.value;
        if (!session) return null;

        const payload = await decrypt(session);
        return payload;
    } catch (error) {

        unstable_rethrow(error)
        console.error('Session retrieval failed:', error);
        return null;
    }
}

export async function updateSession(){
    try{
          const cookiesObj = await cookies();
          const session = cookiesObj.get('session')?.value;
          if (!session) return null;

          const payload = await decrypt(session);

          //console.log("------session-check------"+JSON.stringify(payload.expires));

          const FIVE_MINUTES = 5 * 60 * 1000; // 5 minutes in ms

         //console.log(new Date(payload.expires).getTime()- Date.now());
         //console.log(FIVE_MINUTES);
         //console.log((new Date(payload.expires).getTime() - Date.now()) < FIVE_MINUTES);

          if ((new Date(payload.expires).getTime() - Date.now()) < FIVE_MINUTES) {

              let expiry=new Date(Date.now() + 1800 * 1000);
              payload.expires = expiry;

              const newSession = await encrypt(payload);
              await (await cookies().set({
                name: 'session',
                value: newSession,
                expires: expiry,
                //httpOnly: true,
                //secure: process.env.NODE_ENV === 'production',
                //path: '/',
              }));

              //console.log("------session-updated------"+JSON.stringify(payload));
              //console.log("------session-updated-time------"+JSON.stringify(payload.expires));

          }
          return payload;
    }
    catch(ex){
        //console.log("------session-error------"+JSON.stringify(ex.message));
    }
}

