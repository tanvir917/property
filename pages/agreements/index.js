import HomeLayout from "../../Layouts/HomeLayout";

const Agreements = () => {
    return (
        <HomeLayout>
            <div className="container mx-auto px-4 py-12">
                <div className="my-6">
                    <h2 className="text-2xl font-medium mb-4">Agreements</h2>
                    <hr />
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-medium mb-4">Lease</h2>
                    <p className="mb-5">The initial term of the Lease is generally one year, and the Lease automatically renews every year as long as the resident is in compliance with the Lease and Right to Purchase Agreement. Each year, the resident has the right to give notice that he/she does not want to renew the Lease for another year. If for any reason the resident decides to leave the home at the end of a Lease term and is in compliance with the Lease, the full security deposit will be returned.</p>

                    <p className="mb-5">The resident's financial commitment is limited to the initial term of the Lease. The resident does not have to renew the Lease after the initial term. The maximum number of years of the Lease is five in most states and three in Texas.</p>

                    <p className="mb-5">Over the life of the Lease, subject to applicable laws, Home Partners expects residents to treat the home as their own, maintain the lawn and garden, remove snow or debris, and complete minor repairs.</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-medium mb-4">Right to Purchase Agreement</h2>
                    <p className="mb-5">The resident's Right to Purchase Agreement (and therefore Right to Purchase) is in effect as long as the Lease is in effect, and the resident is in compliance with these two agreements.</p>

                    <p className="mb-5">The Right to Purchase Agreement gives the resident the right to purchase the home from Home Partners at a pre-defined price for each year of the Lease, as long as the resident is in compliance with the Lease and the Right to Purchase Agreements. The maximum number of years a resident can rent the home and have the Right to Purchase is five years in most states and three years in Texas. The Right to Purchase does not obligate the resident to buy the home.</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-medium mb-4">Maintenance Adjustment Included in Purchase Price</h2>
                    <p className="mb-5">The purchase price in your Right to Purchase, as set at the time you enter into the lease, will include an adjustment equal to $2,500 (a “Maintenance Adjustment”). If you choose to purchase the home, and the maintenance costs covered by the Maintenance Adjustment actually incurred by Home Partners during the lease are less than the Maintenance Adjustment, the purchase price of the home at closing will be reduced by the unused amount of the Maintenance Adjustment.</p>

                    <p className="mb-5">The Maintenance Adjustment generally may be used to cover the cost of any repairs, renovations, replacements or improvements to the home that Home Partners determines are necessary or appropriate during your lease term. Examples of the costs for which the Maintenance Adjustment may be used include the replacement of a major mechanical system (e.g., HVAC, furnace, roofing) or the repair of appliances, plumbing or fixtures. Home Partners generally is responsible for costs of home repairs in excess of the Maintenance Adjustment and those excess costs will not increase the purchase price for the home.</p>

                    <p className="mb-5">However, the Maintenance Adjustment does not limit your responsibility for any costs for which you would be responsible under the terms of the lease. Examples of these costs are costs due to your misuse of the home, your willful or negligent conduct, or your failure to comply with the lease. Home Partners may require you to pay these other costs separately in accordance with the terms of your lease.</p>

                    <p className="mb-5">Your rent is not affected by the Maintenance Adjustment, and the Maintenance Adjustment does not affect you unless you purchase the home. For example, if Home Partners pays repair costs of $2,500 during the lease term that are covered by the Maintenance Adjustment, and you choose not to buy the home, you will not be required to reimburse Home Partners for those amounts.</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-medium mb-4">Escrow</h2>
                    <p className="mb-5">Generally within 48 hours of a seller accepting Home Partners' offer for the purchase of a home, prospective residents will be required to sign the Lease and the Right to Purchase Agreement and provide the deposit, all to be held in escrow, pending the closing of the purchase of the home by Home Partners</p>

                    <p className="mb-5">Prospective residents will have an opportunity to review all documentation, and Home Partners encourages all prospective residents to consult with legal and tax advisors to review such documents and the transaction prior to signing any documents.</p>
                </div>
            </div>
        </HomeLayout>
    );
};

export default Agreements;