import { instance } from '@/services/instance';
import { schemaExample } from '@/types/schemas/user';

export default async (id: number) => {
	const response = await instance.get(`users/${id}`);
	return schemaExample.parse(response);
};
