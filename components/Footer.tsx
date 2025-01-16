'use client'
export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Period Cramp Soother, Inc.</p>
    <a href="https://github.com/codetil">GitHub</a>
      </div>
    </footer>
  )
}