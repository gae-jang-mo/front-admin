import axiosClient from '../lib/axiosClient';

const CONTEXT = '/api/v1/products';

export const findInternalProducts = async () => {
    // Pageable, 이름 추가
    return await axiosClient.get(`${CONTEXT}/internal`);
};
