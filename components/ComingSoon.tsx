import { BookOpen } from "lucide-react";

function BlogComing() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-6">
        <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
          <BookOpen className="w-16 h-16 text-purple-600" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          Coming Soon
        </h1>

        <p className="text-lg text-gray-600 max-w-md mx-auto">
          We're working hard to bring you something amazing. Our blog will be
          available soon!
        </p>

        <div className="flex items-center justify-center gap-2 pt-4">
          <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
}

export default BlogComing;