import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import footerstyle from "@/project-styles/footer.module.css"

export default function Footer() {
  return (

        <main className={footerstyle.maincontainer}>
          <div className={footerstyle.contentcontainer}>
            <div className={footerstyle.sociallinks}>
              <Link href="/facebook" className={footerstyle.sociallink}>
                <Facebook color="#007ebb" className={footerstyle.iconsize}/>
              </Link>
    
              <Link href="/twitter" className={footerstyle.sociallink}>
                <Linkedin color="#007ebb" className={footerstyle.iconsize}/>
              </Link>
    
              <Link href="/github" className={footerstyle.sociallink}>
                <Github color="#007ebb" className={footerstyle.iconsize}/>
              </Link>
            </div>
    
            <div className={footerstyle.logowrapper}>
              <Image
                src="/logobg.png"
                alt="logo background"
                width={248}
                height={148}
                className={footerstyle.logoimage}
              />
              <Image
                src="/pnglogo1.png"
                alt="logo"
                width={118}
                height={128}
                className={footerstyle.logooverlay}
              />
            </div>
          </div>
    
          <div className={footerstyle.footertext}>
            <p>
              © {new Date().getFullYear()} by <span>Urooj Sadiq</span>. All rights reserved.
            </p>
          </div>
        </main>
      );
    }
    