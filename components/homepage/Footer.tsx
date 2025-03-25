import { defaultSEO } from "../../utils/seo.ts";

const [name, jargon] = defaultSEO?.title?.split(" - ") ??
  ["Akordium", "Mitra seng peduli karo sampeyan"];
const description = defaultSEO?.description ??
  "Your digital partner for success online.";

export default function Footer() {
  return (
    <footer class="bg-primary text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div class="col-span-1">
            <h3 class="font-bold mb-4">{name}</h3>
            <p class="text-sm mb-4">{jargon}</p>
            <p class="text-sm">{description}</p>
          </div>

          {/* Services */}
          <div class="col-span-1">
            <h4 class="font-bold mb-4">Services</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-gray-300">
                  Custom Software Development
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300">Web Application</a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300">Mobile Application</a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300">UI/UX Design</a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300">
                  Digital Transformation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div class="col-span-1">
            <h4 class="font-bold mb-4">Company</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-gray-300">About</a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300">Portfolio</a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300">Blog</a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300">Contact</a>
              </li>
              <li>
                <a href="/honorable_mentions.txt" class="hover:text-gray-300">
                  Honorable Mentions
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div class="col-span-1">
            <h4 class="font-bold mb-4">Connect</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-gray-300">Facebook</a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300">Instagram</a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300">LinkedIn</a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300">Twitter</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Akordium. All rights reserved.</p>
          <div class="flex gap-4 mt-4 md:mt-0">
            <a href="#" class="hover:text-gray-300">Privacy Policy</a>
            <a href="#" class="hover:text-gray-300">Terms of Service</a>
            <a href="#" class="hover:text-gray-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
