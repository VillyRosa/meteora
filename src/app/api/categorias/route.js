import { getCategorias } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET() {
  const categorias = getCategorias();
  return NextResponse.json(categorias);
}