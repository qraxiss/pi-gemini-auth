# @qraxiss/pi-gemini-auth

Pi extension that restores Google Cloud Code Assist (Gemini CLI) OAuth and provider support as a self-contained package.

## What it does

This extension adds:

- **OAuth integration** for Google Cloud Code Assist (Gemini CLI) using a browser-based PKCE flow
- **Gemini provider** compatible with Pi's agent and coding agent interfaces
- **Token persistence and refresh** to keep authentication seamless across sessions
- **Multiple Gemini models** including Gemini 2.0 Flash, Gemini 2.0 Pro, and others from Google Cloud Code Assist

The provider was originally part of Pi but has been removed from upstream. This package restores it as a standalone, independently versioned extension — **no modified Pi fork required**.

## Install

### Use the extension (recommended)

```bash
pi install npm:@qraxiss/pi-gemini-auth
```

Or try it without installing:

```bash
pi -e npm:@qraxiss/pi-gemini-auth
```

### Load from a local directory (development)

```bash
pi -e /abs/path/to/pi-gemini-auth
```

Note: local directory loading requires `pnpm install` in the package first (Pi does not auto-install for local paths).

## Usage

After installing the extension:

1. Run `/login` in Pi
2. Select "Google Cloud Code Assist (Gemini CLI)"
3. Complete the Google authentication flow in your browser
4. Choose a Gemini model from the model list and start chatting

The extension remembers your authentication across sessions via Pi's settings.

## Requirements

- **Node.js** ≥ 22
- **A Google account** (no billing required for the free tier)
- Optional environment variables for non-free tiers:
  - `GOOGLE_CLOUD_PROJECT` or `GOOGLE_CLOUD_PROJECT_ID`: explicitly set your Cloud project ID (auto-provisioned for free tier)

## Security

Pi extensions run with full system access (see [Pi documentation](https://github.com/earendil-works/pi) for details). Review the source code before installation if you have security concerns.

## Development

### Setup

```bash
pnpm install
```

### Type check

```bash
pnpm run check
```

### Lint

```bash
pnpm run lint
```

### Test

```bash
pnpm run test
```

### Load in Pi locally

```bash
pi -e /abs/path/to/pi-gemini-auth
```

After loading, run `/login` and verify the Gemini provider appears and streams responses.

## How it works

The extension:

1. Registers a Google Cloud Code Assist OAuth provider that:

   - Generates a PKCE code challenge for secure OAuth
   - Opens the browser for user consent
   - Exchanges the auth code for an access token and project ID
   - Stores credentials in Pi settings for reuse

2. Provides Gemini models from Google Cloud Code Assist, including:

   - Gemini 2.0 Flash
   - Gemini 2.0 Pro
   - Gemini 2.0 Thinking (experimental)
   - Gemini 1.5 Pro
   - Gemini 1.5 Flash
   - Gemini 2.0 Flash (Lite)
   - Gemini 1.5 Flash (Lite)

3. Streams responses with proper message formatting and thinking blocks (where applicable)

## License

MIT

## Author

Fatih Güman
