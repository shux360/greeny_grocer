import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="bg-background text-foreground">
        <div class="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h1 class="text-3xl font-bold tracking-tight text-green-700">
                Contact Us
              </h1>
              <p class="mt-4 text-muted-foreground">
                Get in touch with us for any questions or inquiries.
              </p>
              <form class="mt-4 space-y-6">
                <div>
                  <label
                    class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium"
                    for="name"
                  >
                    Name
                  </label>
                  <div class="mt-1">
                    <input
                      class="h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary"
                      id="name"
                      autocomplete="name"
                      required=""
                      type="text"
                      name="name"
                    />
                  </div>
                </div>
                <div>
                  <label
                    class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium"
                    for="email"
                  >
                    Email
                  </label>
                  <div class="mt-1">
                    <input
                      class="h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary"
                      id="email"
                      autocomplete="email"
                      required=""
                      type="email"
                      name="email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium"
                    for="phone"
                  >
                    Phone
                  </label>
                  <div class="mt-1">
                    <input
                      class="h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary"
                      id="phone"
                      autocomplete="tel"
                      required=""
                      type="tel"
                      name="phone"
                    />
                  </div>
                </div>
                <div>
                  <label
                    class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium"
                    for="message"
                  >
                    Message
                  </label>
                  <div class="mt-1">
                    <textarea
                      class="min-h-[80px] border text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary"
                      id="message"
                      name="message"
                      rows="3"
                      required=""
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-700 text-white hover:bg-green-600 h-10 px-4 py-2 w-full"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div class="bg-green-200 rounded-lg p-20 ">
              <h2 class="text-2xl font-bold">Contact Information</h2>
              <div class="mt-4 space-y-4">
                <div>
                  <h3 class="text-lg font-medium">Address</h3>
                  <p class="text-muted-foreground">
                    123 Main Street <br /> Anytown, USA 12345
                  </p>
                </div>
                <div>
                  <h3 class="text-lg font-medium">Phone</h3>
                  <p class="text-muted-foreground">(123) 456-7890</p>
                </div>
                <div>
                  <h3 class="text-lg font-medium">Email</h3>
                  <p class="text-muted-foreground">info@grocerystore.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
