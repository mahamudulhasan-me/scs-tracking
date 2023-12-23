const fieldLengthCheck = (phone:string = '', length:number) => {
    return { 
        mb: 1,
        input: {color: phone.length === length ? '':'red'}
    }
}

export default fieldLengthCheck;