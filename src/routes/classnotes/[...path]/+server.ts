import { redirect, type RequestHandler } from "@sveltejs/kit";

export const prerender = true;

export const GET: RequestHandler<{ path: string }> = async ({ params }) => {
    redirect(303, `https://bcanotes.anli.dev/${params.path}`);
};