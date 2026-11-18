import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import { pluginCodeblocks} from 'starlight-codeblocks/expressive-code'
import { pluginLanguageBadge } from 'expressive-code-language-badge'

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
    plugins: [pluginLineNumbers(), pluginCodeblocks(), pluginLanguageBadge()],
    defaultProps: {
        showLineNumbers: false,
        wrap: false,
        overridesByLang: {
            'js,ts,html,java,kt,swift,css,md,graphql,ruby,php,py': { showLineNumbers: true, },
            'bash,ps,sh': { preserveIndent: false },
        },
    },
}
