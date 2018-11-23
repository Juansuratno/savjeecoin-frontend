import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent implements OnInit {
	public pendingTransactions = [];
	public miningInProgress = false;

	constructor(private blockchainService: BlockchainService, private router: Router) {
		this.pendingTransactions = blockchainService.blockchainInstance.pendingTransactions;
	}

	ngOnInit() {
	}

	minePendingTransactions(){
		this.blockchainService.blockchainInstance.minePendingTransactions(
			this.blockchainService.walletKeys[0].publicKey
		);
		this.router.navigate(['/']);
	}

}