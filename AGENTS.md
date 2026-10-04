<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Preserve the uploaded static site's markup, CSS, and server-rendered content snapshot; update doctor-specific copy in the snapshot so the original layout and language pages remain intact.
- Keep public contact actions pointed at the verified phone, WhatsApp, and social pages rather than former-owner destinations.
- Keep home-page visual redesigns isolated in semantic section classes and the final premium.css override layer so the static snapshot remains maintainable.
- Keep About-page visual redesigns isolated in semantic section classes and the final about-premium.css override layer so the static snapshot remains maintainable.
- Keep Service-page visual redesigns isolated behind the service-premium body class and final service-premium.css layer so its cards can mirror Home safely.
- Keep Contact-page visual redesigns isolated behind the contact-editorial body class and final contact-premium.css layer so its form behavior remains untouched.
- Keep essential site images and scripts bundled under public so downloaded source preserves the same content and layout without external asset dependencies.

- The public site supports exactly English and Bangla; all language-aware copy is rendered from the bundled snapshot.
- Keep the homepage before-and-after showcase clearly labeled as an illustrative visualization, not a patient outcome claim.
