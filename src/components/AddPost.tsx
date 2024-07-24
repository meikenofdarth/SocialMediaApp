import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const AddPost = () => {
  const { userId } = auth();
  // console.log(userId);

  // const testAction = async (formData: FormData) => {
  //   "use server";

  //   if (!userId) return;
  //   const desc = formData.get("desc") as string;
  //   try {
  //     const res = await prisma.post.create({
  //       data: {
  //         userId: userId,
  //         desc: desc,
  //       },
  //     });
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm">
      {/*AVATAR*/}
      <Image
        src="https://images.pexels.com/photos/27101095/pexels-photo-27101095/free-photo-of-river-in-barren-canyon-in-the-usa.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/*POST*/}
      <div className="flex-1">
        {/*TEXT INPUT*/}
        <form action="" className="flex gap-4">
          <textarea
            placeholder="What's on your mind today ?"
            className="p-2 bg-slate-100 rounded-lg flex-1"
            name="desc"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
          <button>Send</button>
        </form>
        {/*POST OPTIONS*/}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
