import { useState } from 'react'
import "./Container.css"

const Container = () => {

    const [arr, setArr] = useState([])


    // random ra ký tự
    const characters = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    // random ra độ dài của ký tự
    const randomLenghth = Math.floor(Math.random() * 5) + 1

    // số lượng phần tử  và lấy, truyền phần tử vào mảng
    let length = 1000;
    for (let i = 0; i < length; i++) {
        let otp = (characters(randomLenghth));
        arr.push(otp)
    }


    const handleSort = () => {
        // sử dụng hàm sort có sẵn để sắp xếp lại mảng
        let list = arr.sort();

        // copy lại mảng đã sắp xếp
        let listCopy = [...arr]

        // tìm chỉ mục của item
        let objIndex = listCopy.findIndex((item) => item === list);

        // cập nhật sắp xếp
        listCopy[objIndex] = list;

        setArr(listCopy)
    }


    return (
        <div className="container">
            <div className="title">List Random:</div>
            <div className="select">
                <button onClick={() => handleSort()}>Cách 1</button>
            </div>
            <div className="box">
                {
                    arr && arr.length > 0 && arr.map(item => {
                        return (
                            <>
                                <div className="container-child">{item}</div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Container