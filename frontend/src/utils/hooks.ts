import { useStore } from 'effector-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { $user, User, setUser } from '../store/user';
import {useUsersCurrentUserUsersMeGet } from '../queries/openApIComponents';

export function logIn(values){
   
    var reqBody: string[] = []

    for (var property in values) {
        var encodedKey = encodeURIComponent(property)
        var encodedValue = encodeURIComponent(values[property])
        reqBody.push(encodedKey + '=' + encodedValue)
    }
    
    var req = reqBody.join('&');
    
    return fetch('http://localhost/api/v1/auth/jwt/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
        body: req
    })

}

export function useVerifiedUser(redirectOnFail = '/login') {
    const router = useRouter()
    const [curUser,setCurUser] = useState<User | null>(null)
    const user = useStore($user)
    const {data, isLoading, error} = useUsersCurrentUserUsersMeGet({})
    console.log(data)


    useEffect(() => {
        console.log(user);
        if(!user || error){
            setUser(null)
            return;
        }  
    },[user,redirectOnFail,router,error,data]) 

    useEffect(() => {
        setCurUser(data ? {
            id: data?.id,
            email: data?.email,
        } : null)
    },[data]);
    return({loading: isLoading, curUser, data})
}