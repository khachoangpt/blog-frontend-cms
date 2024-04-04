import { CustomerService, type GetMeAdminResponse } from '$/backend'
import { getJWT } from '@/actions/cookies'
import { REVALIDATE_DEFAULT, queryTags } from '@/constants'

/**
 * Retrieves the customer information for the current user.
 *
 * @return {Promise<{ customer: GetMeResponse, error: string }>} The customer information or an error message.
 */
export const getMe = async (): Promise<{
	customer?: GetMeAdminResponse
	error?: string
}> => {
	try {
		const jwt = await getJWT()
		if (!jwt) return { error: 'JWT not found' }
		const customer = await CustomerService.getMe({
			cache: { revalidate: REVALIDATE_DEFAULT, tags: queryTags.me({ jwt }) },
		})
		return { customer }
	} catch {
		return { error: 'Customer not found' }
	}
}
