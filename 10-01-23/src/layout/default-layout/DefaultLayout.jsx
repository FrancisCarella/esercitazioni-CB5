import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

export function DefaultLayout(props) {
    const {
        children,
        onClick
    } = props;

    console.log({props})

    return (
        <div className='App' onClick={onClick}>
                <Header />
                <main>{children}</main>
                <Footer />
        </div>
    )
}