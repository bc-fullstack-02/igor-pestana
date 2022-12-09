import { Link } from 'react-router-dom';
import Heading from '../../components/Heading'
import Text from '../../components/Text';
import logo from '../../assets/logo.svg';
import { TextInput } from '../../components/TextInput';
import { User } from 'phosphor-react';
import { Lock } from 'phosphor-react';
import Button from '../../components/Button';

//Interface para encher os parâmetros
interface AuthFormProps {
    formTitle: string;
    submitFormButtonText: string;
    submitFormButtonAction: (user: string, password: string) => void;
    linkDescription: string;
    routeName: string;
}

function AuthForm({
    formTitle,
    submitFormButtonText,
    submitFormButtonAction,
    linkDescription,
    routeName,
}: AuthFormProps) {
    function handleSubmit(event: FormEvent) {
        console.log('ENTROU NO HANDLESUBMIT!!!!!!!!!!!!!!!!!!!!!!!')
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        submitFormButtonAction(
            form.elements.user.value,
            form.elements.password.value
        );
    }
    return (
        <div>
            <div className="text-cyan-50 flex flex-col items-center mt-16">
                <header className='flex flex-col items-center'>
                    <img src={logo} alt="Logo" />

                    <Heading size="lg">Sysmap Parrot</Heading>

                    <Text className='mt-1 opacity-50'>{formTitle}</Text>
                </header>

                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
                    <label htmlFor="user" className='flex flex-col gap-2'>
                        <Text>Endereço de e-mail</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <User />
                            </TextInput.Icon>
                            <TextInput.Input
                                id='user'
                                type='text'
                                placeholder='Digite seu login'
                            />
                        </TextInput.Root>
                    </label>
                    <label htmlFor="password" className='flex flex-col gap-2'>
                        <Text>Sua senha</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <Lock />
                            </TextInput.Icon>
                            <TextInput.Input
                                id='password'
                                type='password'
                                placeholder='*******'
                            />
                        </TextInput.Root>
                    </label>

                    <Button type='submit' className='mt-4'>{submitFormButtonText}</Button>
                </form>


                <footer className='flex-col items-center gap-4 mt-8'>
                    < Text asChild size='sm'>
                        < Link to={routeName} className='text-gray-400 underline hover:text-gray-200'
                        >
                            {linkDescription}
                        </ Link>
                    </Text>
                </footer>
            </div>
        </div >
    );
}

export default AuthForm;