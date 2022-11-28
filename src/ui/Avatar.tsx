interface AvatarProps {
    url: string;
}

export default function Avatar({url} : AvatarProps) {
    return (
        <img className="rounded-full" src={url} alt="avatar">

        </img>
    )
}