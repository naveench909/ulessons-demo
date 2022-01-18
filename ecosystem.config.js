module.exports = {
	apps: [
		{
			name: "app-dev",
			script: "npm",
			args: "run dev",
			instances: "1",
			watch: true,
		},
		{
			name: "app-prod",
			script: "npm",
			args: "start",
			instances: "1",
			watch: true,
			
		},
	],
};