import { useEffect, useState } from 'react';
import { getProducts } from '../../Common/Service/Service';
import { Header, Container, Footer } from '../../Styles/HomeStyle';
import { AiOutlineHome } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import Products from './Products';


export default function Home () {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const promise = getProducts();
        promise.then((res => setProducts(res.data)))
    }, []);

    return (
        <>
            <Header>
                <h1>LightsON</h1>
            </Header>

            <Container>
                <Products products={products}/>
            </Container>

            <Footer>
                <AiOutlineHome className="icon" />
                <BsSearch className="icon" />
                <BsBag className="icon" />
            </Footer>

        </>
    )
}
