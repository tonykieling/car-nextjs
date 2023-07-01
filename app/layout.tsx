import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Car Hero',
  description: 'Car Hub Application',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="relative" suppressHydrationWarning={true}>
                <Navbar />
                { children }
                <Footer />
            </body>
        </html>
    )
}
