"use server";
import { NextResponse } from 'next/server';
import { Adminlogin } from '@lib/auth';

export async function POST(req) {

try{

        let flag = true;
        const reqData = await req.json();

        if (reqData.hiddenfield) {
            flag = false;
        }
        if (flag) {

           const Username = reqData.username;
           const Password = reqData.password;

            if (!Username || !Password) {
                return NextResponse.json({ resData: 'Username and Password are required' }, { status: 400 });
            }

             try {
               // await dbConnect(); 


                if (!Username || !Password) {
                    return NextResponse.json({ resData: 'Username and Password are required' }, { status: 400 });
                }


           
                try {

                     if(Username=="excel"&&Password=="exceladmin"){
                        const data={
                            UserName:Username,
                            Srno:2
                        }
                        await Adminlogin(data);
                        return NextResponse.json({ resData: 'success' }, { status: 200 });
                     }else{
                        return NextResponse.json({ resData: 'failed' }, { status: 200 });
                     }

                    // procedureName = 'adminlogin_sp';
                    // const params = [
                    //     { name: 'Option', type: sql.VarChar, value: 'login' },
                    //     { name: 'SrNo', type: sql.Int, value: 0 },
                    //     { name: 'Username', type: sql.VarChar, value: Username ?? null },
                    //     { name: 'Password', type: sql.VarChar, value: Password ?? null },
                    // ];

                    // const result = await executeStoredProcedure(procedureName, params);

                    // if (result && result?.[0]?.[0]) {
                    //     await Adminlogin(result[0][0]);
                    //     return NextResponse.json({ resData: 'success' }, { status: 200 });
                    // } else {
                    //     return NextResponse.json({ resData: 'failed' }, { status: 200 });
                    // }
                } catch (error) {
                    console.error('Failed to fetch users:', error);
                    return NextResponse.json({ resData: 'Database error', error: error.message }, { status: 500 });
                }

            } catch (error) {
                console.error('Failed to process admin login:', error);
                return NextResponse.json({ resData: 'Database error', error: error.message }, { status: 500 });
            }


        }


} 
catch (err) {
        console.error('Admin Route Error:', err);
        return NextResponse.json({ resData: "No Data Available", err }, { status: 500 });
}

}