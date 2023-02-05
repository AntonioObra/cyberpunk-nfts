// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract NftMarketplace {
    struct NFT {
        address owner;
        string title;
        string description;
        uint256 price;
        string image;
        bool isListed;
        bool isShowcase;
        bool isHidden;
    }

    mapping(uint256 => NFT) public nfts;

    uint256 public numberOfNfts = 0;

    function createNFT(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _price,
        string memory _image,
        bool _isListed,
        bool _isShowcase
    ) public returns (uint256) {
        NFT storage nft = nfts[numberOfNfts];

        nft.owner = _owner;
        nft.title = _title;
        nft.description = _description;
        nft.price = _price;
        nft.image = _image;
        nft.isListed = _isListed;
        nft.isShowcase = _isShowcase;
        nft.isHidden = false;

        numberOfNfts++;

        return numberOfNfts - 1;
    }

    function buyNft(uint256 _id) public payable {
        NFT storage nft = nfts[_id];
        payable(nft.owner).call{value: nft.price};

        nft.owner = msg.sender;
    }

    function getNFTS() public view returns (NFT[] memory) {
        NFT[] memory allNfts = new NFT[](numberOfNfts);

        for (uint256 i = 0; i < numberOfNfts; i++) {
            NFT storage item = nfts[i];

            allNfts[i] = item;
        }

        return allNfts;
    }

    function listNFT(uint256 _id) public {
        require(
            nfts[_id].owner == msg.sender,
            "You are not the owner of this NFT"
        );
        require(nfts[_id].isListed == false, "This NFT is already listed");

        NFT storage nft = nfts[_id];

        nft.isListed = true;
    }

    function unlistNFT(uint256 _id) public {
        require(
            nfts[_id].owner == msg.sender,
            "You are not the owner of this NFT"
        );
        require(nfts[_id].isListed == true, "This NFT is not listed");

        NFT storage nft = nfts[_id];

        nft.isListed = false;
    }

    function deleteNFT(uint256 _id) public {
        NFT storage nft = nfts[_id];

        nft.isHidden = true;
    }
}
