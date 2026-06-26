type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	type Locals = Runtime;
}

interface ImportMetaEnv {
	readonly PUBLIC_WEB3FORMS_ACCESS_KEY: string;
}
