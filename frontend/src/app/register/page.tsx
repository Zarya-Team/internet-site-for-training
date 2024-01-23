'use client'
import { $user, User, setUser } from "../../store/user";
import { useStore } from "effector-react";
import { useRouter } from "next/navigation";
import { Formik,Form,Field } from "formik";
import { logIn } from "../../utils/hooks";
import classNames from "classnames";

export default function Login(){
    const user = useStore($user);
    const router = useRouter();

    return(
    <div className='container mx-auto mt-6 justify-center flex flex-col h-screen items-center'>
        <Formik 
            initialValues={{username:'',password:''}} 
            validate={(values) => {
                const errors: Partial<typeof values> = {};

                if (!values.username) errors.username  = "Необходимо ввести электронную почту";
                if (!values.password) errors.password = "Необходимо ввести пароль";

                return errors;
            }}
            onSubmit={ async (values,{setErrors,setSubmitting}) => {
                setSubmitting(true)

                try{
                    console.log(user)
                    const responce = await logIn(values)
                    setUser({
                        id:'',
                        email: values?.username,
                        favourites: []
                    })
                    router.push('/');
                }
                catch(e:any){
                    if (
                        e.stack.detail ==
                        'Не найдено учетной записи с указанными данными'
                      ) {
                        setErrors({
                          password:
                            'Не найдено учетной записи с указанными данными.',
                        });
                      }
                }
            }}
        >
        {({errors, isSubmitting, touched}) => 
        (
            <Form className="items-center bg-[#F1E1D0] p-3 pt-[50px] w-[550px] h-[450px] max-sm:w-[300px] max-sm:h-[300px] max-sm:pt-[30px] shadow-lg text-black flex flex-col">
                
                <h1 className='mb-14 max-sm:mb-6 text-2xl font-bold'>Регистрация</h1>
                <div className={classNames({
                    "form-control bg-white text-black flex flex-col items-center mb-6 h-[40px] shadow-sm":true,
                    'mb-10':touched.username && errors.username
                    })}>
                    <Field 
                        type='email' 
                        id='username' 
                        name='username' 
                        className={classNames({
                        'input bg-white text-black input-bordered h-[40px] w-[450px] max-sm:w-[250px] p-4': true,
                        'input-error mb-2': touched.username && errors.username,
                    })}
                    placeholder="Электронная почта"
                    />
                        <label className="label mb-2">
                            <span className="label-text-alt text-error">
                                {touched.username && errors.username}
                            </span>
                        </label>
                </div>
                <div className={classNames({
                    "form-control bg-white text-black flex flex-col items-center mb-8 h-[40px] shadow-sm":true,
                    'mb-10':touched.username && errors.username
                    })}>
                    <Field
                        type='password'
                        id='password'
                        name='password'
                        className={classNames({
                        'input bg-white text-black input-bordered h-[40px] w-[450px] max-sm:w-[250px] p-4': true,
                        'input-errormb-2': touched.password && errors.password,
                        })}
                        placeholder="Пароль"
                        />
                            <label className="label mb-2">
                                <span className="label-text-alt text-error">
                                    {touched.password && errors.password}
                                </span>
                            </label>
                </div>
                <button className="btn btn-primary bg-white w-[300px] mb-[30px] text-black" type="submit">
                    {isSubmitting ? (
                        <div className="loading loading-spinner loading-md" />
                    ) : (
                        'Войти'
                    )}
              </button>
              
              <a className="btn btn-primary bg-white w-[300px] text-black" href="/login">Авторизация</a>
            </Form>
        )}
        </Formik>
    </div>
    )
}