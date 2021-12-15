export const posts = [
    {
        id: 1,
        title: 'Injection',
        img: 'https://www.indusface.com/wp-content/uploads/2016/11/how-to-prevent-sql-injection-attack.png',
        desc: 'Injection occurs when an attacker exploits insecure code to insert (or inject) their own code into a program',
        longDesc: 'Because the program is unable to determine code inserted in this way from its own code, attackers are able to use injection attacks to access secure areas and confidential information as though they are trusted users. Examples of injection include SQL injections, command injections, CRLF injections, and LDAP injections.'
    },
    {
        id: 2,
        title: 'Broken Authentication',
        img: 'https://www.globalsign.com/application/files/9716/0388/7415/iStock-1175502114.png',
        desc: 'Incorrectly implemented authentication and session management calls can be a huge security risk.',
        longDesc: 'f attackers notice these vulnerabilities, they may be able to easily assume legitimate user\'s identities. Multifactor authentication is one way to mitigate broken authentication. Implement DAST and SCA scans to detect and remove issues with implementation errors before code is deployed.'
    },
    {
        id: 3,
        title: 'Sensitive Data Exposure',
        img: 'https://now.symassets.com/content/dam/norton/global/images/non-product/misc/tlc/folder-downloading_800x300.jpg',
        desc: 'APIs, which allow developers to connect their application to third-party services like Google Maps, are great time-savers.',
        longDesc: 'However, some APIs rely on insecure data transmission methods, which attackers can exploit to gain access to usernames, passwords, and other sensitive information. Data encryption, tokenization, proper key management, and disabling response caching can all help reduce the risk of sensitive data exposure.'
    },
    {
        id: 4,
        title: 'XML External Entities',
        img: 'https://securitysouls.com/wp-content/uploads/2021/02/XXE-1536x797.png',
        desc: 'This risk occurs when attackers are able to upload or include hostile XML content due to insecure code, integrations, or dependencies.',
        longDesc: 'An SCA scan can find risks in third-party components with known vulnerabilities and will warn you about them. Disabling XML external entity processing also reduces the likelihood of an XML entity attack.'
    },
    {
        id: 5,
        title: 'Broken Access Control',
        img: 'https://miro.medium.com/max/1400/1*3z3zxJj_GzArgT2SIy529w.png',
        desc: 'If authentication and access restriction are not properly implemented, it\'s easy for attackers to take whatever they want. ',
        longDesc: `With broken access control flaws, unauthenticated or unauthorized users may have access to sensitive files and systems, or even user privilege settings. Configuration errors and insecure access control practices are hard to detect as automated processes cannot always test for them. Penetration testing can detect missing authentication, but other methods must be used to determine configuration problems. Weak access controls and issues with credentials management are preventable with secure coding practices, as well as preventative measures like locking down administrative accounts and controls and using multi-factor authentication.`
    }
]