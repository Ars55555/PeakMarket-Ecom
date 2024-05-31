// 1st rhega hash krne k liye
// 2nd rhega compare krke decyrpt krne k liye
import bcrypt from 'bcrypt';

export const hashPassword = async(password) =>{
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword;
    }catch (error){
        console.log(error);
    }
};
export const comparePassword = async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);
};