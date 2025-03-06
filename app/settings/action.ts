import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function handleUpdate(formData: FormData) {
    "use server";
    const session = await auth();
    const name = formData.get("name") as string;
    await prisma.user.update({
        where: {
            email: session?.user?.email as string,
        },
        data: {
            name: name,
        },
    })
    revalidatePath("/settings");
    console.log(name);
}