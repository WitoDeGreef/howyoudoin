import Link from "next/link";

export default function Card({url, size, image, name}) {
    return (
        <Link href={url}>
            <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                <img src={"/images/" + image} alt="IMG-MENU" />

                <div className={"btn2 flex-c-m txt5 ab-c-m " + size}>
                    {name}
                </div>
            </div>
        </Link>
    );
}