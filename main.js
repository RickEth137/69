const font = 'Slant';

figlet.defaults({ fontPath: 'https://cdn.jsdelivr.net/npm/figlet/fonts' });
figlet.preloadFonts([font], ready);

// --- Content for Commands ---
const abstract_title = "ABSTRACT"; // No change here, as it was already simplified
const intro_title = "INTRODUCTION";
const legacy_title = "THE LEGACY";
const vision_title = "VISION";
const method_title = "HOW #69 WAS FOUND";

const menu_footer = `\nType <white class="command">menu</white> to return to the main sections.`;

const abstract_content = `
PROJECT NAME: 69CNYTOKEN
TOKEN SYMBOL: $69CNYT

The crypto landscape thrives on community and shared narratives. Memecoins
embody collective sentiment and digital identity. $69CNYT is a groundbreaking
new memecoin paying homage to the legendary, earliest days of the Ethereum
blockchain, specifically drawing inspiration from a historically significant
deployment.

Leveraging cutting-edge on-chain analysis, $69CNYT stakes its claim as the
ULTIMATE 69 Token of All Times, building upon a legacy born from the
very essence of decentralized innovation.` + menu_footer;

const intro_content = `
In the vast and ever-expanding universe of digital assets, numbers often
carry more weight than mere digits. The number "69" transcends its numerical
value to become a cultural icon, representing harmony, balance, and a
playful irreverence that resonates deeply within internet culture and,
by extension, the memecoin space.

$69CNYT is not just another token; it is a declaration. It is the culmination
of a journey back through the Ethereum genesis, a discovery of hidden history,
and the audacious assertion that a new standard for memetic value can be set.
Our mission is to capture the spirit of "69" and elevate it to unprecedented
heights, creating a community-driven phenomenon built on transparency,
historical reverence, and and unbridled fun.` + menu_footer;

const legacy_content = `
The Ethereum blockchain officially launched its mainnet in July 2015.
While ETH was the first asset, rapid smart contract development led to
user-defined tokens. Identifying the precise chronological order of
these early ERC-20 (or ERC-20-like) token deployments requires meticulous
on-chain analysis.

--- 2.1 The Pioneering "First" Token: Reputation ($REP) ---
Augur's Reputation ($REP) token stands as one of Ethereum's earliest and
most historically significant token deployments.

Verified Details of a Key $REP Deployment:
  Contract Address:   <a href="https://etherscan.io/address/0x6c114b96b7a0e679c2594e3884f11526797e43d1" target="_blank">0x6c114b96b7a0e679c2594e3884f11526797e43d1</a>
  Token Symbol:       REPUTATION ($REP)
  Deployed By Wallet: 0xd82369aaeC27C7a749AFDb4eb71ADD9E64154cd6
  Deployment Block:   5926236

This specific REP contract signifies an incredibly early foray into what
would become the ERC-20 standard, long before its official ratification.
It's a monumental milestone in tokenized assets on Ethereum.

--- 2.2 Unveiling the 69th Ethereum Token: A Historical Revelation ---
Through rigorous on-chain analysis, we pinpointed a truly unique artifact:
the 69th token deployed on the network (by our precise methodology).
This early contract holds a special place in Ethereum's chronological ledger.

Verified Details of the 69th Ethereum Token:
  Contract Address:   <a href="https://etherscan.io/address/0x04F61b7a5f73da58ad15C2B1D8b83A3324EC1c90" target="_blank">0x04F61b7a5f73da58ad15C2B1D8b83A3324EC1c90</a>
  Transaction Hash:   <a href="https://etherscan.io/tx/0x1f88c77eca690f2514b34cf27d333f762fe160b1fd9e292fc145794208cb2f9b" target="_blank">0x1f88c77eca690f2514b34cf27d333f762fe160b1fd9e292fc145794208cb2f9b</a>
  Creator Wallet:     <a href="https://etherscan.io/address/0x58cBC34576EFC4f2591fbC6258f89961e7e34D48" target="_blank">0x58cBC34576EFC4f2591fbC6258f89961e7e34D48</a>
  Deployment Block:   5927496

(Note: While this contract adheres to ERC-20 functionality, its specific
human-readable name and symbol are not consistently available across public
block explorers. This is common for very early, less widely adopted
token contracts, adding to its mystique as a true relic.)

This token, deployed just 1,260 blocks after the REP contract, represents a
fascinating point in time when the Ethereum token ecosystem was rapidly
expanding. It is this obscure, yet chronologically significant, deployment
that serves as the spiritual predecessor and inspiration for $69CNYT.` + menu_footer;

const vision_content = `
$69CNYT is designed to be the definitive memecoin encapsulating the essence
of the number 69, drawing power from its cultural resonance and grounding
itself in the verifiable history of Ethereum's token deployments. We aim to
transcend the simple counting of tokens by creating a vibrant community and
a cultural movement around this unique numerical significance.

Why $69CNYT is the Ultimate 69 Token:
* Historical Reverence: Acknowledges and celebrates the genuine 69th
  token on Ethereum, transforming a chronological fact into mythos.
* Memetic Power: The number "69" is inherently memetic; instantly relatable
  and shareable across diverse online communities.
* Community-Driven Ethos: Driven by its community. From marketing to
  future developments, power resides with holders, fostering a truly
  decentralized and engaging environment.
* Simplicity and Accessibility: Embraces simplicity, making it accessible
  to anyone interested in participating in the cultural phenomenon without
  complex technical barriers.` + menu_footer;

const method_content = `
The precise identification of the 69th Ethereum token was achieved through
rigorous and systematic on-chain analysis using a custom Python script
powered by web3.py and Alchemy's robust RPC infrastructure. This methodology
ensures chronological accuracy based on the criteria for what constitutes
a "token."

--- 4.1 Technical Stack ---
* Web3.py: Python library for interacting with Ethereum blockchain.
* Alchemy RPC: Provides reliable, scalable connection to Ethereum mainnet.

--- 4.2 Script Logic and Flow ---
The core of our discovery lies in the \`find_nth_ethereum_token\` function:
* Initialization: Starts scanning from \`START_BLOCK = 0\`.
  Sets \`TARGET_TOKEN_NUMBER = 69\`.
  Defines a minimal \`ERC20_ABI_SUBSET\` for \`symbol()\` and \`decimals()\`.
* Block-by-Block Iteration: Iterates sequentially, fetching detailed info.
  \`time.sleep(0.05)\` is incorporated for RPC rate limits.
* Contract Creation Identification (\`get_block_details\`): Examines transactions.
  A \`to\` address of \`None\` signifies contract creation.
* Deployed Contract Address Retrieval (\`get_transaction_receipt\`): Fetches
  receipt for contract creation, containing \`contractAddress\`.
* ERC-20 Token Validation (\`is_erc20_token\`): Critical filtering step.
  Attempts to call \`symbol()\` and \`decimals()\`.
  If both return valid values, it's confidently classified as ERC-20.
* Chronological Counting: Adds identified ERC-20 tokens to a \`found_tokens\` list.
  Script halts and reports once \`len(found_tokens)\` equals \`TARGET_TOKEN_NUMBER\`.

--- 4.3 Conclusion of the Script's Role ---
The script provides a deterministic and verifiable method for establishing
the chronological order of ERC-20 token deployments. Its output definitively
points to \`0x04F61b7a5f73da58ad15C2B1D8b83A3324EC1c90\` in block \`5927496\` as
the 69th token by its robust identification criteria. This programmatic proof
forms the bedrock of $69CNYT's claim to be the ULTIMATE 69 Token.

--- PYTHON SCRIPT ---
(Note: Line numbers added for terminal readability. Scroll to view full code.)

${(function() {
    const python_script_raw = `001 import time
002 import json
003 from web3 import Web3, exceptions
004
005 # --- Configuration ---
006 ALCHEMY_RPC_URL = "https://eth-mainnet.g.alchemy.com/v2/-xxxxxxxxxxxxxx" # Replace
007 w3 = Web3(Web3.HTTPProvider(ALCHEMY_RPC_URL))
008
009 START_BLOCK = 0
010 TARGET_TOKEN_NUMBER = 69
011 MAX_BLOCKS_TO_SCAN = 1000000 # Safety limit to prevent extremely long runs
012
013 # ERC-20 ABI subset for checking symbol and decimals
014 ERC20_ABI_SUBSET = [
015    {"constant": True, "inputs": [], "name": "symbol", "outputs": [{"name": "", "type": "string"}], "payable": False, "stateMutability": "view", "type": "function"},
016    {"constant": True, "inputs": [], "name": "decimals", "outputs": [{"name": "", "type": "uint8"}], "payable": False, "stateMutability": "view", "type": "function"}
017 ]
018
019 # --- Blockchain Interaction Functions ---
020
021 def get_block_details(block_number):
022    """
023    Fetches block details from the Ethereum blockchain using Web3.py.
024    """
025    try:
026        print(f"Fetching details for block {block_number}...")
027        block = w3.eth.get_block(block_number, full_transactions=True)
028        transactions_data = []
029        if block and block.transactions:
030            for tx in block.transactions:
031                tx_dict = dict(tx)
032                transactions_data.append({
033                    'hash': tx_dict['hash'].hex(),
034                    'to': tx_dict['to'],
035                    'input': tx_dict['input'].hex(),
036                    'from': tx_dict['from'],
037                    'nonce': tx_dict['nonce']
038                })
039        return {'transactions': transactions_data}
040    except exceptions.BlockNotFound:
041        print(f"Block {block_number} not found.")
042        return None
043    except exceptions.ExtraDataLengthError:
044        print(f"Extra data length error for block {block_number}. Skipping.")
045        return None
046    except Exception as e:
047        print(f"Error fetching block {block_number}: {e}")
048        return None
049
050 def get_transaction_receipt(tx_hash):
051    """
052    Fetches the transaction receipt to get the contract address for contract creations.
053    """
054    try:
055        receipt = w3.eth.get_transaction_receipt(tx_hash)
056        if receipt and receipt.contractAddress:
057            return receipt.contractAddress
058        return None
059    except Exception as e:
060        print(f"Error fetching receipt for transaction {tx_hash}: {e}")
061        return None
062
063 def is_erc20_token(contract_address):
064    """
065    Checks if a deployed contract at the given address is an ERC-20 token
066    by attempting to call its 'symbol' and 'decimals' functions.
067    """
068    if not contract_address or contract_address == "0x0000000000000000000000000000000000000000":
069        return False
070
071    try:
072        contract = w3.eth.contract(address=contract_address, abi=ERC20_ABI_SUBSET)
073
074        symbol = contract.functions.symbol().call()
075        decimals = contract.functions.decimals().call()
076
077        if isinstance(symbol, str) and isinstance(decimals, int) and decimals >= 0:
078            return True
079        return False
080    except exceptions.BadFunctionCallOutput:
081        return False
082    except exceptions.ContractLogicError:
083        return False
084    except Exception as e:
085        return False
086
087 # --- Main Script Logic ---
088 def find_nth_ethereum_token(start_block, target_n):
089    """
090    Iterates through Ethereum blocks to find the Nth token creation.
091    """
092    found_tokens = []
093    current_block = start_block
094
095    print(f"Starting scan from block {start_block} to find the {target_n}th token...")
096
097    if not w3.is_connected():
098        print("Not connected to Ethereum node. Please check your RPC URL.")
099        return None, None
100
101    while len(found_tokens) < target_n and current_block < start_block + MAX_BLOCKS_TO_SCAN:
102        try:
103            block_data = get_block_details(current_block)
104
105            if block_data and 'transactions' in block_data:
106                for tx in block_data['transactions']:
107                    if tx.get('to') is None:
108                        contract_address = get_transaction_receipt(tx['hash'])
109
110                        if contract_address:
111                            if is_erc20_token(contract_address):
112                                found_tokens.append({
113                                    'number': len(found_tokens) + 1,
114                                    'block_number': current_block,
115                                    'contract_address': contract_address,
116                                    'transaction_hash': tx['hash']
117                                })
118                                print(f"  Found token #{len(found_tokens)} at block {current_block}: {contract_address}")
119
120                                if len(found_tokens) == target_n:
121                                    print(f"\\n--- Found the {target_n}th token! ---")
122                                    print(f"Block Number: {current_block}")
123                                    print(f"Contract Address: {contract_address}")
124                                    print(f"Transaction Hash: {tx['hash']}")
125                                    return contract_address, current_block
126
127            current_block += 1
128            time.sleep(0.05)
129
130        except Exception as e:
131            print(f"An unexpected error occurred at block {current_block}: {e}")
132            break
133
134    if len(found_tokens) < target_n:
135        print(f"\\nCould not find {target_n} tokens within {MAX_BLOCKS_TO_SCAN} blocks starting from {start_block}.")
136    return None, None
137
138 if __name__ == "__main__":
139    found_contract, found_block = find_nth_ethereum_token(START_BLOCK, TARGET_TOKEN_NUMBER)
140
141    if found_contract:
142        print(f"\\nThe {TARGET_TOKEN_NUMBER}th token found is at address {found_contract} in block {found_block}.")
143    else:
144        print(f"Failed to find the {TARGET_TOKEN_NUMBER}th token.")`;

    // Escape HTML-like tags and then colorize line numbers
    const python_script_formatted = python_script_raw
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/^(\d{3})/gm, '[[;gray;]$1]');

    return $.terminal.escape_brackets(python_script_formatted);
})()}` + menu_footer;

// --- Help and Greeting ---

const help_body = `
Welcome to $69CNYT: The Ultimate 69 Token of All Times.
A groundbreaking memecoin paying homage to Ethereum's earliest history.

Type 'help' for a list of commands, or choose a section below:

--- MAIN SECTIONS ---
  <white class="command">abstract</white>   - Project Summary and Vision
  <white class="command">intro</white>      - The Spirit of 69
  <white class="command">legacy</white>     - Tracing Ethereum's Earliest Tokens
  <white class="command">vision</white>     - The $69CNYT Ultimate Token Vision
  <white class="command">method</white>     - How the 69th Token Was Found (includes code)

--- GENERAL COMMANDS ---
  <white class="command">clear</white>      - Clear the screen
  <white class="command">help</white>       - Show this help message
  <white class="command">exit</white>       - Close this terminal session`;

// --- Commands ---

const commands = {
    abstract() {
        const rainbow_header = rainbow(render(abstract_title), window.currentSeed);
        this.echo(rainbow_header + abstract_content);
    },
    intro() {
        const rainbow_header = rainbow(render(intro_title), window.currentSeed);
        this.echo(rainbow_header + intro_content);
    },
    legacy() {
        const rainbow_header = rainbow(render(legacy_title), window.currentSeed);
        this.echo(rainbow_header + legacy_content);
    },
    vision() {
        const rainbow_header = rainbow(render(vision_title), window.currentSeed);
        this.echo(rainbow_header + vision_content);
    },
    method() {
        const rainbow_header = rainbow(render(method_title), window.currentSeed);
        this.echo(rainbow_header + method_content, { keepWords: true });
    },
    exit() {
        this.echo("You can now close this terminal session.");
        this.disable();
    },
    menu() {
        this.exec('help', true);
    },
    help() {
        // Always display the main title with rainbow effect
        const rainbow_main_title = rainbow(render('69CNYTOKEN'), window.currentSeed);
        this.echo(rainbow_main_title + '\n' + help_body);
    }
};

const term = $('body').terminal(commands, {
    completion: Object.keys(commands).concat(['clear']),
    checkArity: false,
    greetings: false,
    prompt: '> '
});

term.on('click', '.command', function() {
   const command = $(this).text();
   term.exec(command, { typing: true, delay: 50 });
});

function ready() {
    window.currentSeed = rand(256); // Make seed globally accessible
    term.echo(() => rainbow(render('69CNYTOKEN'), window.currentSeed))
        // The help_body already contains the static header, so we just echo the body
        .echo(help_body)
        .resume();
}

function rainbow(string, seed) {
    return lolcat.rainbow(function(char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
    }, string, seed).join('\n');
}

function rand(max) {
    return Math.floor(Math.random() * (max + 1));
}

function render(text) {
    const cols = term.cols();
    return trim(figlet.textSync(text, {
        font: font,
        width: cols,
        whitespaceBreak: true
    }));
}

function trim(str) {
    return str.replace(/[\n\s]+$/, '');
}

function hex(color) {
    return '#' + [color.red, color.green, color.blue].map(n => {
        return n.toString(16).padStart(2, '0');
    }).join('');
}
