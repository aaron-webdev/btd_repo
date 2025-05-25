import Button from 'react-bootstrap/Button';



export default function StoreFinder()
{



    return(
        <div className='flex-column d-flex nav align-items-center my-5'>
            <section id='storeFinder'>
                <Button variant='success' href='/findus'><h1>Find our Store</h1></Button>
            </section>
        </div>
    )
}