import { useStore } from 'effector-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { $token, setToken } from '../store/user';
import { fetchToken, useToken } from '../queries/openApIComponents';


export type User = {
    email:string,
    id:string,
}


export function logIn(values){
   
    var reqBody: string[] = []

    for (var property in values) {
        var encodedKey = encodeURIComponent(property)
        var encodedValue = encodeURIComponent(values[property])
        reqBody.push(encodedKey + '=' + encodedValue)
    }
    
    var req = reqBody.join('&');
    
    return fetch('http://localhost:5000/api/v1/auth/jwt/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
        body: req
    })
}

export function useVerifiedToken(redirectOnFail = '/login') {
    const router = useRouter()
    const token = useStore($token)
    const [user,setUser] = useState<User | null>(null)

    const {data, isLoading, error} = useToken(
        {
            body: {token: token?.access_token ?? ''},
        },
        { enabled: !!token}
    )

    useEffect(() => {
        console.log(token);
    },[token,redirectOnFail,router,error,data]) 

    useEffect(() => {
        let TokenList = null

        try{
            TokenList = token?.access_token?.split('.')?.[1]?.length
              ? JSON.parse(
                    Buffer.from(token.access_token.split('.')[1], 'base64').toString()
                )
              : null
        } catch(e:any){}

        setUser(
            TokenList
              ? {
                  email: TokenList.email?.toString(),
                  id: TokenList.sub?.toString(),
                }
              : null
        )
    },[token]);
    return({loading: isLoading, token, user})
}