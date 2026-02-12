"use client";

import { Header } from "../../../shared/layout/Header";
import { Footer } from "../../../shared/layout/Footer";
import { EditorView } from "../../../features/editor/EditorView";

interface EditorPageProps {
  params: { id: string };
}

export default function EditorPage({ params }: EditorPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <EditorView patternId={params.id} />
      </main>
      <Footer />
    </div>
  );
}

