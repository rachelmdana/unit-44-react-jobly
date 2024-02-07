import { resolve as _resolve } from 'path';

export default (env, argv) => {
    const envPath = env.ENVIRONMENT ? `.env.${env.ENVIRONMENT}` : '.env';

    const config = {
        entry: './client/index.js',
        output: {
            filename: 'bundle.js',
            path: _resolve(__dirname, 'build'),
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json']
        }
    };

    return config;
};