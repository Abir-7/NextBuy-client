import { toast } from "sonner";

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("You have successfully subscribed to the newsletter!");
  };

  return (
    <div className="bg-white p-8 rounded-lg  w-full ">
      <div>
        <h1 className="text-2xl font-semibold text-center mb-4 text-zinc-950">
          Subscribe to our Newsletter
        </h1>
        <p className="text-zinc-700 text-center ">
          Get the latest updates and news delivered to your inbox.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full mt-1 px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-zinc-950 text-white py-2 px-4 rounded-lg hover:bg-zinc-800"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
