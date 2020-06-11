import axios from './axios'
const PAGE = 1
const NUMBERITEM = 6
export const fetchListProduct = (PAGE = PAGE, NUMBERITEM = NUMBERITEM) => {
    return axios.post("/story/getlist", {
        page: PAGE,
        numberitem: NUMBERITEM
    })
}
export const feachDetail = (id) => {
    return axios.get(`/story/detial/${id}`)
}
export const feachDetailChap = (id, page = PAGE) => {
    return axios.post("/chapter/getlist",{
        id: id,
        page: page
    })
}