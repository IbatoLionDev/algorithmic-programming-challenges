# Challenge: Construct a suffix array (and optionally an LCP array) for a given string,
# enabling very efficient pattern searches. This is an advanced challenge in string processing.
# Use object-oriented programming and follow the DRY principle.

from suffix_array import SuffixArray

def main():
    text = "banana"
    sa = SuffixArray(text)
    suffix_arr = sa.build_suffix_array()
    lcp_arr = sa.build_lcp_array()
    print(f"Suffix Array: {suffix_arr}")
    print(f"LCP Array: {lcp_arr}")

if __name__ == "__main__":
    main()
