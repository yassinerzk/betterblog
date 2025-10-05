'use server'
import { auth } from "@/lib/auth"; // path to your Better Auth server instance

export const signInUser = async( email:string, password:string )=>{
    try{
        await auth.api.signInEmail({
            body: {
                email,
                password
            },
        });
        return {success:true, message:'User signed in successfully'};
    }catch(err){
        const error = err as Error;
        return {success:false, message:error.message || 'Failed to sign in user'};
    }
};
