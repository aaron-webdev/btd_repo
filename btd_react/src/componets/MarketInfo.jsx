import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




export default function MarketInfo()
{
    const ChatMkt = 'https://www.google.com/maps/place/Chattanooga+Market/@35.037894,-85.3207302,17z/data=!4m15!1m8!3m7!1s0x88605e81f208f22b:0xa04c67e4b20a2958!2s1801+Reggie+White+Blvd,+Chattanooga,+TN+37408!3b1!8m2!3d35.037894!4d-85.3181553!16s%2Fg%2F11pb816mw6!3m5!1s0x88607dabd06b3907:0x63261dd52eec1adb!8m2!3d35.036998!4d-85.3175437!16s%2Fm%2F04yb869?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D'
    const EbnzMkt = 'https://www.google.com/maps/place/1001+Ebenezer+Rd,+Knoxville,+TN+37923/@35.8932958,-84.0730696,17z/data=!3m1!4b1!4m6!3m5!1s0x885c25a5ebfe5bfd:0x9a2493eb72855e23!8m2!3d35.8932958!4d-84.0704947!16s%2Fg%2F11ckqmb0r8?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D'
    const MaryvilleMkt = 'https://www.google.com/maps/place/Farmers+Market/@35.7573238,-83.9698654,19z/data=!4m15!1m8!3m7!1s0x885e9fd15fb1aa65:0x942b29837f9f4c37!2s330+E+Broadway+Ave,+Maryville,+TN+37804!3b1!8m2!3d35.7576001!4d-83.9690513!16s%2Fg%2F11bw40d5jf!3m5!1s0x885e9f6f714ef377:0xbbb47d23afa5ec6a!8m2!3d35.757186!4d-83.9696123!16s%2Fg%2F11kj5mn3b_?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D'
    const OakRidgeMkt = 'https://www.google.com/maps/place/Jackson+Square+Fountain/@36.0287888,-84.2408288,18.5z/data=!4m15!1m8!3m7!1s0x885c336fb3070fcd:0x2f3c9afe5dc1579d!2sJackson+Square,+Oak+Ridge,+TN+37830!3b1!8m2!3d36.0248008!4d-84.2401994!16s%2Fm%2F04bsnvy!3m5!1s0x885c3348b5d7e51d:0xd7f6bcbbcb15ffab!8m2!3d36.0292199!4d-84.2398692!16s%2Fg%2F11rg2_vy9s?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D'
    const KnoxMkt = 'https://www.google.com/maps/place/Market+Square,+Knoxville,+TN+37902/@35.9649755,-83.9201916,19z/data=!4m6!3m5!1s0x885c17c4fb524cf1:0x5c943cf96f418bd5!8m2!3d35.9650694!4d-83.9194899!16s%2Fg%2F11h3c6x8qj?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D'
    const TelVilMkt = ''



    return(
        <>
            <Card className='mb-2'>
                <Card.Title>Market Square Farmer's Market</Card.Title>
                <Card.Subtitle>Knoxville</Card.Subtitle>
                <Card.Body>
                    <Card.Text>
                        9am-1pm<br/>
                        Every Saturday<br/>
                        (Look for us infront of the Tennessee Woman Sufferage Memorial)<br/>
                        -AND-<br/>
                        10am-1pm<br/>
                        Every Wednesday
                    </Card.Text>
                    <Button href={KnoxMkt} target='_blank' variant='success'>401 Union Ave, Knoxville, TN 37902</Button>
                </Card.Body>
            </Card>

            <Card className='mb-2'>
                <Card.Title>Jackson Square Farmer's Market</Card.Title>
                <Card.Subtitle>Oak Ridge</Card.Subtitle>
                <Card.Body>
                    <Card.Text>
                        8am-12pm<br/>
                        Every Saturday
                    </Card.Text>
                    <Button href={OakRidgeMkt} target='_blank' variant='success'>219 Broadway Ave, Oak Ridge, TN 37830</Button>
                </Card.Body>
            </Card>

            <Card className='mb-2'>
                <Card.Title>Founder's Square Farmer's Market</Card.Title>
                <Card.Subtitle>Maryville</Card.Subtitle>
                <Card.Body>
                    <Card.Text>
                        9am-1pm<br/>
                        Every Saturday
                    </Card.Text>
                    <Button href={MaryvilleMkt} target='_blank' variant='success'>306 E Broadway, Maryville, TN 37804</Button>
                </Card.Body>
            </Card>

            <Card className='mb-2'>
                <Card.Title>Chattanooga Farmer's Market</Card.Title>
                <Card.Subtitle>First Horizon Pavillion</Card.Subtitle>
                <Card.Body>
                    <Card.Text>
                        11am-4pm<br/>
                        Every Sunday
                    </Card.Text>
                    <Button href={ChatMkt} target='_blank' variant='success'>1801 Reggie White Blvd, Chattanooga, TN 37408</Button>
                </Card.Body>
            </Card>

            <Card className='mb-2'>
                <Card.Title>Tellico Village Farmer's Marke</Card.Title>
                <Card.Subtitle>add location</Card.Subtitle>
                <Card.Body>
                    <Card.Text>
                        9am-12pm<br/>
                        Correct Time and Day
                    </Card.Text>
                    <Button href={TelVilMkt} target='_blank' variant='success'>Directions to the market</Button>
                </Card.Body>
            </Card>

            <Card className='mb-2'>
                <Card.Title>Ebaneezer Farmer's Market</Card.Title>
                <Card.Subtitle>West Knoxville</Card.Subtitle>
                <Card.Body>
                    <Card.Text>
                        3pm-6pm<br/>
                        Every Tuesday
                    </Card.Text>
                    <Button href={EbnzMkt} target='_blank' variant='success'>1001 Ebenezer Road, Knoxville, TN 37923</Button>
                </Card.Body>
            </Card>
        </>
    )
}

/*
<Card>
    <Card.Title>Market Name</Card.Title>
    <Card.Subtitle>Market Venue</Card.Subtitle>
    <Card.Body>
        <Card.Text>
            Market Time<br/>
            Market Day
        </Card.Text>
        <Button href='Google Maps URL' varient='success'>Market Address</Button>
    </Card.Body>
</Card>
*/