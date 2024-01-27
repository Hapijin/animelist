export const getAnimeResponse = async (resource, query) => {
    const respone = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await respone.json()
    return anime
}

export const getNestedAnimeReponse = async(resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    return response.data.flatMap(item => item[objectProperty])
}

export const getGenres = async(resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    return response.data.genres.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
    let oldData
    for (let i = data.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1))
        oldData = data[i]
        data[i] = data[random]
        data[random] = oldData
        // [data[i], data[j]] = [data[j], data[i]];
    }
    return data
    // const response = {
    //     data : shuffle.slice(1, gap)

    // }
    // console.log(response)
    // return shuffle
    // const first = ~~(Math.random() * (data.length - gap ) + 1)
    // const last = first + gap
    
    // const response = {
    //     data: data.slice(first, last)
    // }
}