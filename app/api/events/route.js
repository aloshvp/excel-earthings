import 'server-only';
import { NextResponse } from 'next/server';
import { executeProcedure } from '@lib/db';
import { writeFile, unlink } from 'fs/promises'; 
import path from 'path';
import fs from 'fs'; 


const UPLOAD_BASE_DIR = path.join(process.cwd(), 'public', 'files');

const SaveFiles = async (FilePath, FileBuffer) => {
    try {
        await writeFile(FilePath, FileBuffer);
        return true;
    } catch (error) {
        console.error('File Save Error:', error);
        return false;
    }
};


export async function POST(req) {

    try {
        const formData = await req.formData();
        const switchOption = formData?.get('switchOption');

        if (!switchOption) {
            return NextResponse.json({ resData: 'switchOption parameter is missing' }, { status: 400 });
        }

        switch (switchOption) {
            case "ManageEvents": {

                
                const EVENT_UPLOAD_DIR = path.join(UPLOAD_BASE_DIR, 'events'); 

                const option = formData?.get('option');
                const srno = formData?.get('srno') ? parseInt(formData?.get('srno')) : 0;
                const event_heading = formData?.get('event') ?? null;
                const event_date = formData?.get('date') ?? null;
                const event_time = formData?.get('time') ?? null;
                const event_place = formData?.get('place') ?? null;
                const event_description = formData?.get('description') ?? null;
                const event_active = formData?.get('active');
                
                const imageFile = formData?.get('imageFile'); // The new file object from FormData
                const old_image_file_path = formData?.get('old_image_file_path') ?? null; // Old file path string
                
                let image_file_path = old_image_file_path;
                
                if ((option === 'insert' || option === 'update') && (!event_heading || !event_date)) {
                    return NextResponse.json({ resData: 'Event Heading and Date are required.' }, { status: 400 });
                }
                if ((option === 'update' || option === 'delete' || option === 'updatestatus') && !srno) {
                    return NextResponse.json({ resData: 'SrNo is required for this operation.' }, { status: 400 });
                }
                
                try {

                    if (option === 'insert' || option === 'update') {
                        if (imageFile && imageFile.size > 0) {
                            
                            const fileExt = imageFile.name.split('.').pop().toLowerCase();
                            if (['jpeg', 'jpg', 'png', 'svg', 'webp'].includes(fileExt)) {
                                

                                if (!fs.existsSync(EVENT_UPLOAD_DIR)) {
                                    fs.mkdirSync(EVENT_UPLOAD_DIR, { recursive: true });
                                }
                                
                                let fileName = imageFile.name.trim();
                                

                                if (fs.existsSync(path.join(EVENT_UPLOAD_DIR, fileName))) {
                                    const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
                                    fileName = `${nameWithoutExt}_${Date.now()}.${fileExt}`;
                                }
                                

                                fileName = fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
                                const filePath = path.join(EVENT_UPLOAD_DIR, fileName);
                                

                                const FileBytes = await imageFile.arrayBuffer();
                                const FileBuffer = Buffer.from(FileBytes);
                                await SaveFiles(filePath, FileBuffer);
                                

                                image_file_path = fileName;

                                // if (option === 'update' && old_image_file_path && old_image_file_path !== image_file_path) {
                                //     // Construct the absolute path of the old file
                                //     const absoluteOldPath = path.join(process.cwd(), 'public', old_image_file_path);
                                //     if (fs.existsSync(absoluteOldPath)) {
                                //         await unlink(absoluteOldPath).catch(err => console.error("Failed to delete old file:", err));
                                //     }
                                // }
                                
                            } else {
                                throw new Error('Invalid image file type. Only standard image formats are allowed.');
                            }
                        } else if (option === 'insert' && !old_image_file_path) {
                            return NextResponse.json({ resData: 'Image file is required for a new event.' }, { status: 400 });
                        }
                    }
                    
            
                    const ResultData = await executeProcedure('ManageEvents', 
                        [option,
                        srno,
                        event_heading,
                        event_date,
                        event_time,
                        event_place,
                        event_description,
                        image_file_path,
                        event_active]);

                    if (['insert', 'update', 'delete', 'updatestatus'].includes(option)) {
                        return NextResponse.json({ resData: 'success' }, { status: 200 });
                    } else {
                        return NextResponse.json({ resData: ResultData }, { status: 200 });
                    }
                    
                } catch (error) {
                    console.error('Failed to process event details:', error);
                    return NextResponse.json({
                        resData: 'Database or File Error',
                        error: error.message
                    }, { status: 500 });
                }
            } 
            
            default: {
                return NextResponse.json({ resData: `Unknown switchOption: ${switchOption}` }, { status: 400 });
            }
        } 
        
    } catch (error) {
        console.error('event API Error:', error);
        return NextResponse.json({ resData: 'something went wrong', error: error.message }, { status: 500 });
    }
}