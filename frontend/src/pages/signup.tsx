import React from 'react';
import { SignUpForm } from '../features/auth/SignUpForm';
import { Header } from '../shared/layout/Header';
import { Footer } from '../shared/layout/Footer';

export default function SignUpPage() {
  return (
    <>
      <Header />
      <main>
        <SignUpForm />
      </main>
      <Footer />
    </>
  );
}
