import Link from "next/link";
import {buttonVariants} from "./ui/button";
import {HeartIcon, TriangleIcon} from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t w-full h-16">
            <div
                className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
                <div className="flex items-center gap-3">
                    {/*<CommandIcon className="sm:block hidden w-5 h-5 text-muted-foreground" />*/}
                    <p className="text-center">
                        GPL-3.0 Licensed | Hamma huquqlar himoyalangan 2025 ©Uzbek Developers.{" "}
                        <Link
                            className="px-1 underline underline-offset-2"
                            href="https://github.com/themusharraf/doc/tree/main?tab=GPL-3.0-1-ov-file"
                        >
                            GitHub
                        </Link>
                        .
                    </p>
                </div>

                <div className="gap-4 items-center hidden md:flex">
                    <FooterButtons/>
                </div>
            </div>
        </footer>
    );
}

export function FooterButtons() {
    return (
        <>
            <Link
                href="https://t.me/Musharraaf"
                className={buttonVariants({variant: "outline", size: "sm"})}
            >
                <TriangleIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current"/>
                Author
            </Link>
            <Link
                href="https://tirikchilik.uz/musharraf"
                className={buttonVariants({variant: "outline", size: "sm"})}
            >
                <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current"/>
                Sponsor
            </Link>
        </>
    );
}
