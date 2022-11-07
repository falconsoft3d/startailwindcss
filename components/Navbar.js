import React from 'react'
import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
        <Link href="/">Home</Link>
        <Link href="/buttons">Buttons</Link>
    </div>
  );
}
