import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { string } from 'prop-types';
import Avatar from '../avatar/Avatar.jsx';

//     name: String,
//     "likes": Number,
//     "mediaUrl": String,
//     "user":{
//         "avatarUrl": String,
//         "verified": Boolean
//     },
// "price": String,
// "verified": String
//     }

function Card({name="", like = 0, mediaUrl="", user = {}, price = 0, currency = 0 }) {
    return(
<Card sx={{maxWidth: 500}}>
    <CardHeader 
    avatar={<Avatar/>}></CardHeader>
</Card>
    )
    
}
export default Card;