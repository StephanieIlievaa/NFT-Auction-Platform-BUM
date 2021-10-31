import styles from "./Avatar.module.scss"

function Avatar({ size = 90, url, verified = false}) {
return (
<div className={styles.wrapper}>
    <div className={styles.avatar} sx={{width: size, height: size}}>
<img className={styles.image} src={url}></img>
{ verified 
? <img className={styles.badge} src={'../../../public/images/verified.svg'}/> 
: null}
    </div>
     </div>
);
}

export default Avatar;
