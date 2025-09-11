"use client"
import Link from "next/link"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20 w-full">
      <div className="px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo / Brand */}
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/portfolio.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-white">Wisdom Dev</span>
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            Building modern, scalable, and user-friendly digital experiences.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-500">About</Link></li>
            <li><Link href="/projects" className="hover:text-orange-500">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>SEO Optimization</li>
            <li>Consulting</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
          <div className="flex space-x-4">
            <Link href="https://github.com/" target="_blank">
              <Image src="/stack/GitHub.png" alt="GitHub" width={30} height={30} />
            </Link>
            <Link href="https://linkedin.com/" target="_blank">
              <Image src="/stack/LinkedIn.png" alt="LinkedIn" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Wisdom Dev. All rights reserved.
      </div>
    </footer>
  )
}
