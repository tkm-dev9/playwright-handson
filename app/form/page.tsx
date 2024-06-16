import { Metadata } from "next";
import { ShuffleMemberForm } from "./form";

export const metadata: Metadata = {
  title: '入力フォーム',
  description: 'Playwrightハンズオンの第2ステップ'
}

export default function Form() {
  return (
    <main>
      <h1>入力フォーム</h1>
      <ShuffleMemberForm />
    </main>
  )
}