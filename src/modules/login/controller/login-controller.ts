import type { LoginAdminParams } from '$/backend'
import { loginSchema, pageList } from '@/constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { login } from '../actions/login-actions'

const useLoginController = () => {
	const router = useRouter()
	const loginForm = useForm<LoginAdminParams>({
		defaultValues: { email: '', password: '' },
		resolver: zodResolver(loginSchema),
	})

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = loginForm

	const handleLogin: SubmitHandler<LoginAdminParams> = async (data) => {
		const { loginResponse, error } = await login(data)
		if (loginResponse) {
			toast.success('Login success')
			router.push(pageList.home.href)
		}
		!!error && toast.error(error)
	}

	return { control, handleSubmit, errors, loginForm, handleLogin, isSubmitting }
}

export default useLoginController
